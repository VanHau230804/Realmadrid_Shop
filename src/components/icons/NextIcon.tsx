import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute rounded-lg p-2 right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-slate-50  text-gray-800 "
      onClick={onClick}
    >
      <ArrowForwardIcon className="text-3xl" />
    </div>
  );
};
export default NextArrow;
