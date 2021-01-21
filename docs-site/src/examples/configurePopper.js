() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      popperClassName="some-custom-class"
      popperPlacement="top-end"
      popperModifiers={[
        {
          name: "flip",
          options: {
            allowedAutoPlacements: ["top", "bottom"],
            rootBoundary: "viewport",
          },
        },
        {
          name: 'offset',
          options: {
            offset: [5, 10],
          },
        },
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport",
          },
        }
      ]}
    />
  );
};
