const Testimonial = ({ children, bg }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid blue",
        width: "90%",
        margin: "2rem",
        boxShadow: `3px 5px 2px ${bg}`,
        borderRadius: '7px'
      }}
      data-aos= 'fade-down-right'
    >
      {children}
    </div>
  );
};

export default Testimonial;
