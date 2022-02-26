export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  feilds: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "string",
    },
  ],
};
