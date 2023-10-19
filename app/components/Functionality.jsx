// components/Functionality.js

function Functionality() {
  return (
    <div className="bg-green-900 text-white text-center p-10">
      <div className="flex  items-center justify-center">
        <div>
          <h2 className="text-4xl mb-4">How does the magic happen?</h2>
          <p className="text-xl">
            Quadratic funding is a method of funding public goods that involves
            matching small individual contributions with larger matching funds.
          </p>
        </div>
      </div>

      <div className="mt-10 justify-center items-center text-center space-y-6">
        <div className="flex items-center space-x-4">
          <span className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
            01
          </span>
          <p>
            Quadratic funding matches small individual contributions with larger
            funds from donors.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
            02
          </span>
          <p>
            Matching funds are allocated fairly, giving more weight to small
            donations through a mathematical formula for greater impact from
            smaller donors.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
            03
          </span>
          <p>
            Quadratic funding encourages broad support from many small donors
            for public goods and projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Functionality;
