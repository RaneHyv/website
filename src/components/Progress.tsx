export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 rounded overflow-hidden">
      <div
        className="bg-blue-500 dark:bg-blue-600 text-white text-center h-6 leading-6 transition-width duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
