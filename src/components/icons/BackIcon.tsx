import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute rounded-lg left-4 top-1/2 p-2 transform -translate-y-1/2 z-10 cursor-pointer bg-slate-50  text-gray-800 "
      onClick={onClick}
    >
      <ArrowBackIcon className="text-3xl" />
    </div>
  );
};
export default PrevArrow;
