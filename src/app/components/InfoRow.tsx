interface InfoRowProps {
  label: string;
  value: string | null | undefined;
  isLink?: boolean;
}

export default function InfoRow({label,value, isLink = false}: InfoRowProps) {
  // 값이 없거나 비어있으면 렌더링하지 않음
  if (!value || value.trim() === '') return null;

  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        {isLink ? (
          <a href={value} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}