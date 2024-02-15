import React from "react";

const BioPage = () => {
  return (
    <div className="max-h-[calc(100vh-224px)]  flex ">
      <div className=" text-[#607B96] px-[35px] pt-[17px] overflow-y-auto  scrollbar-thin scrollbar-webkit">
        <div className="overflow-y-visible">
          <table className="table-auto">
            <tbody>
              <tr className="flex gap-10">
                <td>1</td>
                <td>/**</td>
              </tr>
              <tr className="flex gap-10">
                <td>2</td>
                <td>* About me. Hello, I am İlkay.</td>
              </tr>
              <tr className="flex gap-10">
                <td>4</td>
                <td> * I am a Full Stack Developer </td>
              </tr>
              <tr className="flex gap-10">
                <td>4</td>
                <td> * and Graphic Designer.I have been</td>
              </tr>
              <tr className="flex gap-10">
                <td>5</td>
                <td> * developing software for over 6 years.</td>
              </tr>
              <tr className="flex gap-10">
                <td>6</td>
                <td> * I have a bachelor s degree in Management </td>
              </tr>
              <tr className="flex gap-10">
                <td>7</td>
                <td> * Information Systems Engineering and</td>
              </tr>
              <tr className="flex gap-10">
                <td>8</td>
                <td> * an associate s degree in Computer Programming.</td>
              </tr>
              <tr className="flex gap-10">
                <td>8</td>
                <td> */</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
