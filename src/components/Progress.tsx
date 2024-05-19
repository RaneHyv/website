export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 rounded overflow-hidden">
      <div
        className="bg-teal-400 text-white text-center h-6 leading-6 transition-width duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
