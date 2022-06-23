import { Fragment } from "react";
import "./Emaillist.css";
const EmailList = () => {
  return (
    <Fragment>
      <div className="main-container">
        <div className="heading">
          <div className="searchbar">
            <input type="search" />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.2 0C6.57913 0 7.90177 0.547855 8.87696 1.52304C9.85215 2.49823 10.4 3.82087 10.4 5.2C10.4 6.488 9.928 7.672 9.152 8.584L9.368 8.8H10L14 12.8L12.8 14L8.8 10V9.368L8.584 9.152C7.64044 9.95742 6.44057 10.3999 5.2 10.4C3.82087 10.4 2.49823 9.85215 1.52304 8.87696C0.547855 7.90177 0 6.57913 0 5.2C0 3.82087 0.547855 2.49823 1.52304 1.52304C2.49823 0.547855 3.82087 0 5.2 0ZM5.2 1.6C3.2 1.6 1.6 3.2 1.6 5.2C1.6 7.2 3.2 8.8 5.2 8.8C7.2 8.8 8.8 7.2 8.8 5.2C8.8 3.2 7.2 1.6 5.2 1.6Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
          </div>

          <div className="right-corner">
            <button>View</button>
            <button>Edit</button>
            <button>Status</button>
            <button>Send</button>
            <button>...</button>
          </div>
        </div>
        <table border={1}>
          <thead>
          <tr>
            <td className="flex">
              <div className="name">
              <input type="checkbox" />Name
              </div>
              <button>...</button>
            </td>
            <td>Email</td>
            <td>Phone</td>
            <td>Status</td>
            <td>Source</td>
            <td>Date Added</td>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td className="flex">
              <div className="name">
              <input type="checkbox" />Priyanka
              </div>
              <button>...</button>
            </td>
            <td>pri@gmail.com</td>
            <td>9785356457</td>
            <td>Open</td>
            <td>Manually Added</td>
            <td>11/1/12</td>
          </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
export default EmailList;
