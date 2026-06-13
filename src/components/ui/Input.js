export function Input({ label, id, error, className = "", ...props }) {
  const inputId = id || props.name;

  return (
    <label className="block">
      {label ? (
        <span className="mb-1 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {label}{props.required && <span className="ml-0.5 text-red-500">*</span>}
        </span>
      ) : null}
      <input
        id={inputId}
        className={`h-11 w-full rounded-md border border-zinc-200 bg-zinc-100 px-4 text-sm text-zinc-900 outline-none focus:border-zinc-300 ${className}`}
        {...props}
      />
      {error ? (
        <span className="mt-1 block text-sm text-red-600">{error}</span>
      ) : null}
    </label>
  );
}

export function Textarea({ label, id, error, className = "", ...props }) {
  const inputId = id || props.name;

  return (
    <label className="block">
      {label ? (
        <span className="mb-1 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {label}
        </span>
      ) : null}
      <textarea
        id={inputId}
        className={`min-h-28 w-full resize-y rounded-md border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-300 ${className}`}
        {...props}
      />
      {error ? (
        <span className="mt-1 block text-sm text-red-600">{error}</span>
      ) : null}
    </label>
  );
}

