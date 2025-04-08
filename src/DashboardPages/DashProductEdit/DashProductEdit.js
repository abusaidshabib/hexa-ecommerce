import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';
import "./DashProductEdit.css";

const DashProductEdit = () => {

  const { edit } = useContext(ApiDataContext);
  console.log(edit)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-form">

      <label className='title3' htmlFor='title'>Product Title</label><br />
      <input className='input_form_field' id="title" defaultValue={edit.title} {...register("title")} /> <br />

      <label className='title3' htmlFor='price'>Product price</label><br />
      <input className='input_form_field' id="price" defaultValue={edit.price} {...register("price")} /><br />

      <label className='title3' htmlFor='description'>Product description</label><br />
      <textarea className='input_form_field' name="" id="description" cols="10" rows="10" defaultValue={edit.description} {...register("description")}></textarea>

      <label className='title3' htmlFor='discountPercentage
'>Product DiscountPercentage</label><br />
      <input className='input_form_field' id="discountPercentage" defaultValue={edit.discountPercentage
      } {...register("discountPercentage")} /><br />

      <label className='title3' htmlFor='thumbnail'>Product thumbnail</label><br />
      <input className='input_form_field' type="url" id="thumbnail" defaultValue={edit.thumbnail} {...register("thumbnail")} /><br />

      <label className='title3' htmlFor='rating'>Product rating</label><br />
      <input className='input_form_field' type="number" id="rating" defaultValue={edit.rating}{...register("rating")} /><br />

      <label className='title3' htmlFor='stock'>stock</label><br />
      <input className='input_form_field' type="number" id="stock" defaultValue={edit.stock} {...register("stock")} /><br />

      <label className='title3' htmlFor='category'>Product Category</label><br />
      <input className='input_form_field' id="category" 
        defaultValue={edit.category}{...register("category")} /><br />

      <label className='title3' htmlFor='collection'>Product Collection</label><br />
      <input className='input_form_field' id="collection" 
        defaultValue={edit.collection}{...register("collection")} /><br />

      <input className='submit_btn_form' type="submit" value="Submit" />
    </form>
  );
};

export default DashProductEdit;