const convertToOptions = (data: any) => {
  return (
    data.length > 0 &&
    data.map(({ _id, name }: { _id: number | string; name: string }) => ({
      value: _id,
      label: name
    }))
  );
};

export default convertToOptions;
