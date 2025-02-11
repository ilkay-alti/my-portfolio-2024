import React from "react";

const BioPage = () => {
  return (
    <div className="max-h-[calc(100vh-224px)] flex">
      <div className="text-[#607B96] px-[35px] pt-[17px] overflow-y-auto scrollbar-thin scrollbar-webkit">
        <div className="overflow-y-visible">
          <table className="table-auto">
            <tbody>
              <tr className="flex gap-10">
                <td>1</td>
                <td>&#47;&#42;&#42;</td> {/* Escaped comment opening */}
              </tr>
              <tr className="flex gap-10">
                <td>2</td>
                <td>&#42; About me. Hello, I am İlkay.</td>
              </tr>
              <tr className="flex gap-10">
                <td>3</td>
                <td>&#42; I am a Full Stack Developer</td>
              </tr>
              <tr className="flex gap-10">
                <td>4</td>
                <td>&#42; and Graphic Designer. I have been</td>
              </tr>
              <tr className="flex gap-10">
                <td>5</td>
                <td>&#42; developing software for over 6 years.</td>
              </tr>
              <tr className="flex gap-10">
                <td>6</td>
                <td>
                  &#42; I have a bachelor&apos;s degree in Management
                </td>{" "}
                {/* Escaped apostrophe */}
              </tr>
              <tr className="flex gap-10">
                <td>7</td>
                <td>&#42; Information Systems Engineering and</td>
              </tr>
              <tr className="flex gap-10">
                <td>8</td>
                <td>
                  &#42; an associate&apos;s degree in Computer Programming.
                </td>{" "}
                {/* Escaped apostrophe */}
              </tr>
              <tr className="flex gap-10">
                <td>9</td>
                <td>&#42;&#47;</td> {/* Escaped comment closing */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
