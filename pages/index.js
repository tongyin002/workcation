/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import { useState } from 'react';
import PropTypes from 'prop-types';
import PropertyCard from '../components/PropertyCard';

export default function Index({ destinations, propertyTypes, amenities }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="xl:h-screen xl:flex xl:flex-col">
      <div className="sticky top-0 z-10 xl:static">
        <section className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
          <div className="px-4 py-3 text-gray-500 flex justify-between xl:bg-gray-900 xl:py-4 xl:w-56">
            <div id="logo">
              <svg
                className="h-8"
                viewBox="0 0 185 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M121.09 28.336c2.352 0 4.392-1.248 5.424-3.12l-2.688-1.536c-.48.984-1.512 1.584-2.76 1.584-1.848 0-3.216-1.368-3.216-3.264 0-1.92 1.368-3.288 3.216-3.288 1.224 0 2.256.624 2.736 1.608l2.664-1.56c-.984-1.848-3.024-3.096-5.376-3.096-3.648 0-6.336 2.76-6.336 6.336 0 3.576 2.688 6.336 6.336 6.336zM137.084 16v1.416c-.864-1.08-2.16-1.752-3.912-1.752-3.192 0-5.832 2.76-5.832 6.336 0 3.576 2.64 6.336 5.832 6.336 1.752 0 3.048-.672 3.912-1.752V28h3.096V16h-3.096zm-3.336 9.384c-1.896 0-3.312-1.368-3.312-3.384s1.416-3.384 3.312-3.384c1.92 0 3.336 1.368 3.336 3.384s-1.416 3.384-3.336 3.384zM149.851 18.976V16h-2.712v-3.36l-3.096.936V16h-2.088v2.976h2.088v4.992c0 3.24 1.464 4.512 5.808 4.032v-2.808c-1.776.096-2.712.072-2.712-1.224v-4.992h2.712zM153.57 14.56c1.056 0 1.92-.864 1.92-1.896s-.864-1.92-1.92-1.92c-1.032 0-1.896.888-1.896 1.92s.864 1.896 1.896 1.896zM152.034 28h3.096V16h-3.096v12zM163.676 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM178.886 15.664c-1.608 0-2.856.6-3.576 1.68V16h-3.096v12h3.096v-6.48c0-2.088 1.128-2.976 2.64-2.976 1.392 0 2.376.84 2.376 2.472V28h3.096v-7.368c0-3.192-1.992-4.968-4.536-4.968z"
                  fill="#A3BFFA"
                />
                <path
                  d="M61.063 28h3.768l3.144-11.088L71.143 28h3.768l4.704-16.8h-3.48L72.92 23.656 69.391 11.2H66.56l-3.504 12.456L59.84 11.2h-3.48L61.063 28zM85.674 28.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312zM97.308 18.064V16h-3.096v12h3.096v-5.736c0-2.52 2.04-3.24 3.648-3.048V15.76c-1.512 0-3.024.672-3.648 2.304zM113.831 28l-4.968-6.072L113.687 16h-3.696l-4.128 5.28V11.2h-3.096V28h3.096v-5.448L110.231 28h3.6z"
                  fill="#fff"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.911 12.604L36.213 8.16v20.645h9v2h-44v-2h4v-12.72l-3.728.933L1 15.078l21.09-5.273h3.122a9.552 9.552 0 0 0-.68 2.559l-.483 3.975 5.164-2.982v15.448h5V8.161l-7.696 4.444a7.502 7.502 0 0 1 2.565-4.8h-4.12a7.489 7.489 0 0 1 6.646-2.973l-5.591-3.228a7.488 7.488 0 0 1 6.696.402c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 0 1 2.5-2.347 7.49 7.49 0 0 1 6.698-.402l-5.593 3.228a7.488 7.488 0 0 1 6.646 2.973h-4.12a7.498 7.498 0 0 1 2.567 4.8zM25.213 28.805v-10h-6v10h6zm-11-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                  fill="#A3BFFA"
                />
              </svg>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="mt-1 mr-1 focus:outline-none sm:hidden"
            >
              <svg
                className="h-6 w-6 fill-current hover:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className={menuOpen ? 'block' : 'hidden'}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  className={!menuOpen ? 'block' : 'hidden'}
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
          <div className={`${menuOpen ? '' : 'hidden'} sm:flex sm:items-center`}>
            <div className="px-3 py-2 text-white font-medium sm:flex sm:items-center sm:px-1 sm:py-0 xl:text-gray-900">
              <a
                className="block px-2 py-2 rounded-lg hover:bg-gray-700 sm:ml-2 xl:hover:bg-gray-200"
                href="#"
              >
                List your property
              </a>
              <a
                className="block px-2 py-2 rounded-lg hover:bg-gray-700 sm:ml-2 xl:hover:bg-gray-200"
                href="#"
              >
                Trips
              </a>
              <a
                className="block px-2 py-2 rounded-lg hover:bg-gray-700 sm:ml-2 xl:hover:bg-gray-200"
                href="#"
              >
                Messages
              </a>
            </div>
            <div className="px-3 py-4 mt-2 border-t border-gray-800 text-gray-400 sm:relative sm:border-0 sm:mt-0 sm:px-4 sm:py-2">
              <div className="ml-2 mt-2 flex items-center sm:hidden">
                <img
                  className="h-10 w-10 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
                  alt="female-avatar"
                />
                <span className="ml-4 text-gray-200">Isla Schoger</span>
              </div>
              <button
                onClick={() => setDropdownOpen(false)}
                className={`fixed bg-gray-900 h-full w-full inset-0 z-10 opacity-50 cursor-default ${
                  dropdownOpen ? '' : 'hidden'
                }`}
                type="button"
              >
                {' '}
              </button>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hidden focus:outline-none sm:block sm:rounded-full sm:overflow-hidden sm:border-gray-700 sm:border-2 sm:hover:border-gray-200 sm:relative sm:z-20 sm:focus:border-gray-200"
                type="button"
              >
                <img
                  className="h-10 w-10 object-cover"
                  src="https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80"
                  alt="female-avatar"
                />
              </button>
              <div
                className={`mt-4 sm:absolute sm:right-0 sm:mr-2 sm:w-48 sm:bg-gray-100 sm:text-gray-700 sm:rounded-lg sm:shadow-lg sm:py-2 ${
                  dropdownOpen ? 'sm:block sm:z-20' : 'sm:hidden'
                }`}
              >
                <a
                  className="block px-2 py-2 hover:text-gray-200 sm:hover:bg-indigo-500 sm:px-3"
                  href="#"
                >
                  Account Settings
                </a>
                <a
                  className="block px-2 py-2 hover:text-gray-200 sm:hover:bg-indigo-500 sm:px-3"
                  href="#"
                >
                  Support
                </a>
                <a
                  className="block px-2 py-2 hover:text-gray-200 sm:hover:bg-indigo-500 sm:px-3"
                  href="#"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-3 px-4 bg-gray-800 text-gray-500 flex items-center justify-between xl:absolute xl:top-0 xl:left-56 xl:bg-white xl:w-80">
          <div className="relative w-2/3 max-w-xs xl:w-full">
            <div className="absolute ml-2 mt-2">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </div>
            <input
              className="pl-10 py-2 w-full focus:outline-none bg-gray-900 rounded-lg focus:bg-gray-200 focus:text-gray-900 xl:bg-gray-200 xl:focus:bg-white"
              type="text"
              placeholder="Search by keywords"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`px-3 py-2 focus:outline-none ${
              filterOpen ? 'bg-gray-600' : 'bg-gray-700'
            } shadow rounded-lg flex hover:bg-gray-600 xl:hidden`}
            type="button"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
            </svg>
            <span className="ml-1 text-white font-medium tracking-wide">Filters</span>
          </button>
        </section>
      </div>
      <div className="xl:flex-1 xl:flex xl:overflow-hidden">
        <section
          id="filter"
          className={`${
            filterOpen ? '' : 'hidden'
          } bg-gray-800 text-gray-500 sm:sticky sm:top-31 sm:z-10 xl:static xl:flex xl:flex-col`}
        >
          <div className="lg:flex xl:block xl:flex-1 xl:overflow-y-scroll">
            <div className="px-4 py-4 border-t border-gray-900 grid grid-cols-2 gap-4 sm:grid-cols-7 lg:grid-cols-2 lg:w-2/5 xl:w-full">
              <label className="block sm:col-span-2 lg:col-span-1">
                <span>Bedrooms</span>
                <select className="form-select block w-full mt-1 bg-gray-700 text-white">
                  <option>4</option>
                  <option>2</option>
                </select>
              </label>
              <label className="block sm:col-span-2 lg:col-span-1">
                <span>Bathrooms</span>
                <select className="form-select block w-full mt-1 bg-gray-700 text-white">
                  <option>3</option>
                  <option>2</option>
                </select>
              </label>
              <label className="block col-span-2 sm:col-span-3 lg:col-span-2">
                <span>Price Range</span>
                <select className="form-select block w-full mt-1 bg-gray-700 text-white">
                  <option>Up to $2,000 /wk</option>
                  <option>Up to $3,000 /wk</option>
                </select>
              </label>
            </div>
            <div className="mt-2 px-4 py-4 border-t border-gray-900 lg:mt-0 lg:w-1/5 xl:w-full">
              <span className="text-gray-500">Property Type</span>
              <div className="mt-4 sm:flex lg:block">
                {propertyTypes.map((type) => {
                  return (
                    <div key={type} className="my-2 sm:w-1/4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 text-indigo-600"
                          name="radio-colors"
                          value="1"
                        />
                        <span className="ml-2 text-gray-200">{type}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="px-4 py-4 border-t border-gray-900 lg:w-2/5 xl:w-full">
              <span className="text-gray-500">Checkboxes</span>
              <div className="mt-4 sm:flex sm:flex-wrap lg:grid lg:grid-cols-2 xl:block">
                {amenities.map((amenity) => {
                  return (
                    <div key={amenity} className="my-2 sm:w-1/4 lg:w-auto lg:col-span-1">
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                        <span className="ml-2 text-gray-200">{amenity}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="px-4 py-4 bg-gray-900 sticky bottom-0 xl:static">
            <button
              className="px-2 py-2 tracking-wide rounded-lg w-full bg-indigo-500 text-white shadow hover:bg-indigo-400 sm:w-48"
              type="button"
            >
              Update results
            </button>
          </div>
        </section>
        <section
          className={`px-4 py-6 ${filterOpen ? 'hidden' : ''} sm:block xl:overflow-y-scroll`}
        >
          <div>
            <h3 className="text-gray-900 text-xl">Los Angeles</h3>
            <p className="mt-1 text-gray-600 lg:flex lg:justify-between lg:items-center">
              Live like the stars in these luxurious Southern California estates.
              <a className="hidden lg:inline-block lg:text-indigo-500" href="#">
                View all
              </a>
            </p>
            <div className="sm:-mx-4 sm:overflow-x-scroll">
              <div className="sm:inline-flex">
                {destinations.losAngeles.map((dest, index) => {
                  return (
                    <PropertyCard
                      key={dest.title}
                      className={`my-6 mx-auto sm:w-96 ${index === 0 ? 'sm:mx-4' : 'sm:mr-4'}`}
                      {...dest}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mt-4 text-gray-900 text-xl">Phoenix</h3>
            <p className="mt-1 text-gray-600 lg:flex lg:justify-between lg:items-center">
              Escape the cold and enjoy great weather without breaking the bank.
              <a className="hidden lg:inline-block lg:text-indigo-500" href="#">
                View all
              </a>
            </p>
            <div className="sm:-mx-4 sm:overflow-x-scroll">
              <div className="sm:inline-flex">
                {destinations.phoenix.map((dest, index) => {
                  return (
                    <PropertyCard
                      key={dest.title}
                      className={`my-6 mx-auto sm:w-96 ${index === 0 ? 'sm:mx-4' : 'sm:mr-4'}`}
                      {...dest}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      destinations: {
        losAngeles: [
          {
            imgUrl:
              'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'white and brown concrete building under blue sky during daytime',
            plus: true,
            beds: 2,
            baths: 2,
            price: '1,400',
            rating: 4,
            title: 'white and brown concrete building under blue sky during daytime',
            reviews: 34,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt:
              'white and grey concrete building near swimming pool under clear sky during daytime',
            plus: false,
            beds: 5,
            baths: 3,
            price: '1,850',
            rating: 3,
            title:
              'white and grey concrete building near swimming pool under clear sky during daytime',
            reviews: 120,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1504731231146-c0f65dc6a950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            imgAlt: 'white and brown concrete building',
            plus: true,
            beds: 4,
            baths: 2,
            price: '2,200',
            rating: 5,
            title: 'white and brown concrete building',
            reviews: 302,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'red and white wooden house in front of body of water',
            plus: true,
            beds: 4,
            baths: 2,
            price: '2,200',
            rating: 5,
            title: 'red and white wooden house in front of body of water',
            reviews: 302,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'white and brown Labradoodle puppy near the house',
            plus: true,
            beds: 4,
            baths: 2,
            price: '2,200',
            rating: 5,
            title: 'white and brown Labradoodle puppy near the house',
            reviews: 302,
          },
        ],
        phoenix: [
          {
            imgUrl:
              'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'white and brown house during daytime',
            plus: true,
            beds: 2,
            baths: 2,
            price: '1,400',
            rating: 4,
            title: 'white and brown house during daytime',
            reviews: 34,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1576941465093-fc22d70914e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'brown and gray concrete house during daytime',
            plus: false,
            beds: 5,
            baths: 3,
            price: '1,850',
            rating: 3,
            title: 'brown and gray concrete house during daytime',
            reviews: 120,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1523688471150-efdd09f0f312?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'white and red house near lake',
            plus: true,
            beds: 4,
            baths: 2,
            price: '2,200',
            rating: 5,
            title: 'white and red house near lake',
            reviews: 302,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1564357645071-9726b526a8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'house with two chimneys',
            plus: true,
            beds: 4,
            baths: 2,
            price: '2,200',
            rating: 5,
            title: 'house with two chimneys',
            reviews: 302,
          },
          {
            imgUrl:
              'https://images.unsplash.com/photo-1558308508-4e7a8fdff9c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            imgAlt: 'blue wooden house near tree',
            plus: true,
            beds: 4,
            baths: 2,
            price: '2,200',
            rating: 5,
            title: 'blue wooden house near tree',
            reviews: 302,
          },
        ],
      },
      propertyTypes: ['House', 'Apartment', 'Loft', 'Townhouse'],
      amenities: ['Balcony', 'Pool', 'Beach', 'Pet friendly', 'Kid friendly', 'Air conditioning'],
    },
  };
}

Index.propTypes = {
  destinations: PropTypes.object.isRequired,
  propertyTypes: PropTypes.array.isRequired,
  amenities: PropTypes.array.isRequired,
};
