interface IMessageForm {
  error: string | undefined;
  className?: string;
}

const MessageForm = ({ error, className }: IMessageForm) => {
  return (
    <>
      {error && (
        <span
          className={`text-xs ml-3 mt-2 block font-medium text-red-600 ${className}`}
        >
          {error}
        </span>
      )}
    </>
  );
};

export default MessageForm;
