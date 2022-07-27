import { Formik } from 'formik'
import { addProductApi } from './add-product'
import './add.css'
import * as Yup from 'yup'
import { Category } from '../../components/category/category'
import { useNavigate } from 'react-router-dom'

const isValidUrl = (urlString: string | undefined): boolean => {
    var urlPattern = new RegExp(
        '^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$',
        'i',
    ) // validate fragment locator
    return !!urlString && !!urlPattern.test(urlString)
}

const AddSchema = Yup.object().shape({
    name: Yup.string()

        .min(2, 'Too Short!')

        .max(50, 'Too Long!')

        .required('Required'),

    category: Yup.object().required('Required'),

    description: Yup.string()

        .min(2, 'Too Short!')

        .max(50, 'Too Long!')

        .required('Required'),

    avatar: Yup.string()
        .test('is-valid-url', 'Invalid Url', (value) => isValidUrl(value))
        .required('Required'),

    price: Yup.number()

        .min(2, 'Price should be greater than 2')

        .required('Required'),
})

const AddProduct = () => {
    const navigate = useNavigate()
    const addProduct = async (values: any, { setSubmitting }: any) => {
        const success = await addProductApi(
            `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`,
            { ...values, category: values.category?.label }
        )

        if (success) {
            navigate('/')
        } else {
            alert('Add failed')
        }
    }

    return (
        <div className="add-container flex flex-col justify-center items-center gap-10">
            <div className="text-5xl text-center">Add Product</div>
            <Formik
                initialValues={{
                    name: '',
                    category: '',
                    price: '',
                    description: '',
                    avatar: '',
                }}
                validationSchema={AddSchema}
                onSubmit={addProduct}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    setFieldTouched,

                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="form">
                        <div className="flex flex-col min-w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Product name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <span className="text-red-500 mt-1">
                                {errors.name && touched.name && errors.name}{' '}
                            </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-full">
                            <textarea
                                placeholder="Description"
                                name="description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            <span className="text-red-500 mt-1">
                                {errors.description &&
                                    touched.description &&
                                    errors.description}
                            </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-full">
                            <input
                                type="text"
                                name="avatar"
                                placeholder="Image url"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.avatar}
                            />
                            <span className="text-red-500 mt-1">
                                {errors.avatar && touched.avatar && errors.avatar}{' '}
                            </span>
                        </div>

                        <div className="flex flex-col flex-1 min-w-full">
                            <Category
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                name="category"
                            />
                            <span className="text-red-500 mt-1">
                                {errors.category && touched.category && errors.category}{' '}
                            </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-full">
                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />

                            <span className="text-red-500 mt-1">
                                {errors.price && touched.price && errors.price}{' '}
                            </span>
                        </div>
                        <button
                            className="btn text-lg font-bold mt-5"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            SUBMIT
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
export { AddProduct }
