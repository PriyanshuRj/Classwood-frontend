import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { getAllSchoolData } from '../School/helpers/dataFetcher'
import { useSelector } from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SessionDoropDown({inputList, selected, setSelected, dispatch, setLoading}) {
  const navigate = useNavigate();
  
  function fetchNewSession(value){
    dispatch(setSelected(value));
    localStorage.setItem("session", value.id);
    getAllSchoolData(dispatch, navigate, setLoading, selected);
  }
  return (
    <Listbox value={selected} onChange={value=>fetchNewSession(value)}>
      {({ open }) => (
        <div className={`flex flex-col items-start `}>
          <div className="relative w-full mt-1">
            <Listbox.Button className={`relative w-[16rem] py-3 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm`}>
              <span className="flex items-center">
                <span className="block ml-3 truncate">
                  {selected.start_date ? selected.start_date.substring(0,4) + " - " + (parseInt(selected.start_date.substring(0,4)) +1) : "Year"}
                  </span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {inputList.map((person, index) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.start_date && person.start_date.substring(0,4)}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  )
}