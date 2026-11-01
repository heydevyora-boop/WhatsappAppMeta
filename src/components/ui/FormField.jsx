const BASE =
  'px-3 bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm transition-all';

/** Labelled text input / textarea pair matching the verification intake form. */
export default function FormField({
  id,
  label,
  type = 'text',
  as = 'input',
  rows = 4,
  required = false,
  className = '',
  ...rest
}) {
  const sharedProps = {
    id,
    name: id,
    required,
    'aria-required': required || undefined,
    ...rest,
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="font-label-sm text-label-sm text-on-surface font-semibold" htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {as === 'textarea' ? (
        <textarea className={`p-3 resize-none ${BASE}`} rows={rows} {...sharedProps} />
      ) : (
        <input className={`h-10 ${BASE}`} type={type} {...sharedProps} />
      )}
    </div>
  );
}
