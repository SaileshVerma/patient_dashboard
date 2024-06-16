export const DiagnosisList = ({ diagnosticList }: { diagnosticList: any }) => {
  return (
    <div className="flex-1 bg-white shadow p-4 m-5 rounded-lg">
      <div className="flex flex-col gap-2 mt-4 w-full max-w-5xl  rounded-lg p-4">
        <span className="text-2xl pb-4">Diagnostic List</span>
        <div className="flex justify-between items-center bg-slate-200 px-6 py-4  rounded-2xl">
          <span className="text-left">Problem/Diagonosis </span>
          <span className="text-sm text-left flex-wrap px-10">Description</span>
          <span className="text-left">Status</span>
        </div>
        {diagnosticList.map((data: any) => {
          return (
            <div className="flex justify-between items-center hover:bg-blue-100 rounded-2xl">
              <span className="text-left">{data.name}</span>
              <span className="text-sm text-left flex-wrap py-6 px-10">
                {data.description}
              </span>
              <span className="text-left">{data.status}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
