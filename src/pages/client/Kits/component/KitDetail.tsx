import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import {
  getKitById,
  getKitByCategotyId
} from '../../../../services/kit.Service';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IKit, KitImage, Size } from '../../../../types/kit.type';
import { ICartItem } from '../../../../types/cart.type';
import { toast } from 'react-toastify';
import { addCart } from '../../../../services/cart.Service';
import Button from '../../../../components/buttons/Button';
import { useNavigate } from 'react-router-dom';
const KitsDetail: React.FC = () => {
  const {
    handleSubmit,
    formState: { isValid },
    reset
  } = useForm({
    mode: 'onSubmit'
  });
  const [kit, setKit] = useState<IKit>();
  const [categoryKit, setCategory] = useState<IKit[]>([]);
  const { id } = useParams<{ id: string }>();
  const [displayImage, setDisplayImage] = useState('');
  const [images, setImages] = useState<NodeListOf<Element>>();
  const imagesRef = useRef<HTMLImageElement>(null);
  const [sizes, setSize] = useState<NodeListOf<Element>>();
  const [innerSize, setInnerSize] = useState('');
  const sizesRef = useRef<HTMLImageElement>(null);
  const auth = useSelector((state: RootState) => state.auth.data);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchKit = async () => {
      if (!id) return;
      const response = await getKitById(id);
      const categoryResponse = await getKitByCategotyId(response.categoryID);
      setCategory(categoryResponse);
      setKit(response);
    };
    fetchKit();
  }, [id]);
  useEffect(() => {
    if (kit?.images && imagesRef.current) {
      const imagesElements =
        imagesRef.current.querySelectorAll('.details-item-img');
      setImages(imagesElements);
      if (imagesElements.length > 0) {
        imagesElements[0].classList.add('border-[rgb(189,24,28)]');
      }
    }
  }, [kit?.images]);
  const handleDisplayImage = (
    image: KitImage,
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    setDisplayImage(image.url);
    images?.forEach(img => {
      img.classList.remove('border-[rgb(189,24,28)]');
    });

    event.currentTarget.classList.add('border-[rgb(189,24,28)]');
  };
  useEffect(() => {
    if (kit?.size && sizesRef.current) {
      const listSize = sizesRef.current.querySelectorAll('.item-option');
      setSize(listSize);
    }
  }, [kit?.size]);
  const handleActiveSize = (
    size: Size,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    sizes?.forEach(item =>
      item.classList.remove('text-white', '!font-bold', '!bg-second')
    );
    event.currentTarget.classList.add('text-white', '!font-bold', '!bg-second');
    setInnerSize(event.currentTarget.textContent || '');
  };
  const handleAddToCart: SubmitHandler<ICartItem> = async () => {
    if (!isValid) return;
    if (!kit || !innerSize) {
      toast.error('Please select a size before adding to cart');
      return;
    }
    console.log(kit);
    const cartItem = {
      items: {
        _id: kit?._id,
        name: kit?.name,
        images: kit?.images,
        quantity: 1,
        categoryID: kit?.categoryID,
        price: kit?.price,
        size: { _id: kit?.size._id, label: innerSize }
      },
      userId: auth?._id
    };
    console.log(cartItem);
    try {
      const response = await addCart(cartItem);
      reset();
      toast.success('Thêm giỏ hàng công', { position: 'top-right' });
      navigate('/shoppingcart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container-page">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <img
              src={displayImage || kit?.images[0]?.url}
              alt="kit"
              className="w-full rounded-md shadow-md"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">Shop Kits &gt; {kit?.name}</p>
            <h2 className="text-3xl font-bold mt-2">{kit?.name}</h2>
            <p className="text-xl font-semibold text-blue-700 mt-4">
              ${kit?.price}
            </p>
            <div className="mt-6">
              <h3 className="font-medium">Size:</h3>
              <span className="font-bold mx-2" id="innerSize">
                {innerSize}
              </span>
              <div className="flex gap-2 mt-2" ref={sizesRef}>
                {kit?.size.map(size => (
                  <button
                    key={size._id}
                    className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100 item-option"
                    onClick={event => handleActiveSize(size, event)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-medium">Badge:</h3>
              <select className="mt-2 border rounded-md w-full p-2">
                <option value="none">None</option>
                <option value="ucl">Champions League Patch +$20</option>
                <option value="laliga">La Liga Patch +$15</option>
              </select>
              <p className="text-sm text-gray-600 mt-2">
                Personalized items will require an additional 3-4 business days.
              </p>
            </div>
            <Button
              className="mt-6 w-full bg-blue-700 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-800"
              onClick={handleSubmit(handleAddToCart)}
            >
              Add to Cart
            </Button>
            <div ref={imagesRef} className="mt-8 grid grid-cols-3 gap-4">
              {kit?.images.map((image, index) => (
                <img
                  key={image._id}
                  src={image.url}
                  alt={`Related kit image, ${index + 1}`}
                  onClick={event => handleDisplayImage(image, event)}
                  className="w-full h-44 object-cover rounded-md border  details-item-img"
                />
              ))}
            </div>
          </div>
        </div>
        <section className="mt-12">
          <h3 className="text-4xl font-bold text-center">
            You might be interested in
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {categoryKit &&
              categoryKit.length > 0 &&
              categoryKit.map(kit => (
                <Link
                  to="#"
                  className="bg-white shadow-lg rounded-lg p-4 max-w-xs group overflow-hidden relative"
                  key={kit._id}
                >
                  <div className="transition-all aspect-square duration-500 transform group-hover:scale-75 relative">
                    <img
                      src={kit.images[0]?.url}
                      alt={kit.name}
                      className="transform object-cover w-full h-auto transition-all duration-300 group-hover:scale-95 md:group-hover:w-80%]"
                    />
                    <div className=" gap-1 group-hover:flex absolute ">
                      {kit.size.map(size => (
                        <button
                          key={size._id}
                          className="hidden border group-hover:block rounded-full px-3 py-1 text-sm"
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid content-end relative">
                    <div className="text-gray-950 px-[4px] lg:px-[10px] py-[5px] h-full flex flex-col justify-end gap-3 w-full">
                      <div className="flex flex-wrap justify-start h-[50px] w-[90%]">
                        <span className="inline-flex items-center text-start font-bold text-gray-950 line-clamp-2 leading-6 tracking-tighter sm:text-lg group-hover:underline">
                          {kit.name}
                        </span>
                      </div>
                      <div className="items-center h-[65px] border-t border-gray-200 text-gray-950 font-bold w-full inline-flex pt-3">
                        <span className="flex flex-wrap items-center w-fit gap-2">
                          <span className="text-base tracking-normal">
                            {kit.price}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default KitsDetail;
