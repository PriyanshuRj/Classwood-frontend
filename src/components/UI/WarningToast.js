import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setWarningToast } from '../../store/genralUser';
export default function WarningToast() {
    const dispatch = useDispatch();
    const warningToast = useSelector((state)=> state.user.warningToast);
    useEffect(() => {
        if (warningToast.length) {
          setTimeout(function removewarning() {
            dispatch(setWarningToast(""));
          }, 3000);
        }
      }, [warningToast]);
  return (
    <div>{warningToast.length ? (
        <div
          id="toast-success"
          className="fixed z-[100] flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow top-20 right-4  dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Warning icon</span>
    </div>
          <div className="ml-3 text-sm font-normal">{warningToast}</div>
          <button
            type="button"
            onClick={() => dispatch(setWarningToast(""))}
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500  dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      ) : undefined}
      </div>
  )
}
