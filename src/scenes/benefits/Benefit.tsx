import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/type";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 items-center justify-between gap-8 md:flex"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      <motion.div
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        variants={childVariant}
      >
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {icon}
          </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
    </motion.div>
  );
};

export default Benefit;
