import kodluyoruzLogo from "./kodluyoruz.webp";
import notSlackersLogo from "./notSlackersLogo.png";

const partner1 = {
  name: "Become a Partner",
  image:
    "https://static.wixstatic.com/media/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_246,h_164,al_c,q_80,usm_0.66_1.00_0.01,blur_2/nsplsh_54616d4d6272346f6b7634~mv2_d_6016_4016_s_4_2.jpg",
  imageClassName: "become-partner-logo",
  content: [
    "If you are looking for talent or want to have a partner available to share best practices and resources, please feel free to reach out to us with your information. We are always looking to form new connections with businesses and organizations that share our values."
  ],
  link: "mailto:info@codigoecuador.com"
};

const kod = {
  name: "Kodluyoruz",
  image: kodluyoruzLogo,
  imageClassName: "kod-logo",
  content: [
    "Kodluyoruz.org is a software movement that promotes code literacy and adds value to the future of young people in the software field in order to improve every segment of society by using technology."
  ],
  link: "https://www.kodluyoruz.org/"
};

const notSlackers = {
  name: "!Slackers",
  image: notSlackersLogo,
  imageClassName: "not-slackers-logo",
  content: ["All about the !Slackers."],
  link: "https://www.google.com/"
};

const partner4 = {
  name: "Placeholder 4",
  image:
    "https://images.unsplash.com/photo-1573641287741-f6e223d81a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  imageClassName: "placeholder4-logo",
  content: [
    "Here is some information about a potential partner. Here is some information about a potential partner. Here is some information about a potential partner. Here is some information about a potential partner."
  ],
  link: "https://www.google.com/"
};

export const minorPartnersData = [kod, notSlackers, partner1];

//to add new partners, populate partner 3 and 4 above, then add them to list on line 42