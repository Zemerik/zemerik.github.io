type SocialLink = {
    platform: string;
    url: string;
  };
  
  type Project = {
    title: string;
    description: string;
    url: string;
    image: string;
  };
  
  type Profile = {
    name: string;
    age: number;
    bio: string;
    skills: string[];
    socialLinks: SocialLink[];
  };
  
  const defaultProfile: Profile = {
    name: "Hemang Yadav",
    age: 15,
    bio: "A passionate developer with expertise in front-end development and open-source projects.",
    skills: ["HTML", "CSS", "JavaScript", "Python", "C++"],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Zemerik" },
      { platform: "Twitter", url: "https://twitter.com/ZemerikY" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/zemerik" },
    ],
  };

  interface Theme {
    backgroundColor: string;
    textColor: string;
    highlightColor: string;
  }
  
  class LightTheme implements Theme {
    backgroundColor = "#FFFFFF";
    textColor = "#000000";
    highlightColor = "#FF5722";
  }
  
  class DarkTheme implements Theme {
    backgroundColor = "#121212";
    textColor = "#FFFFFF";
    highlightColor = "#BB86FC";
  }

  class User {
    private profile: Profile;
    private theme: Theme;
  
    constructor(profile: Profile, theme: Theme) {
      this.profile = profile;
      this.theme = theme;
    }
  
    getProfile(): Profile {
      return this.profile;
    }
  
    getTheme(): Theme {
      return this.theme;
    }
  
    updateTheme(newTheme: Theme): void {
      this.theme = newTheme;
      console.log(`Theme updated to: ${newTheme.backgroundColor}`);
    }
  
    addSkill(skill: string): void {
      this.profile.skills.push(skill);
      console.log(`Added skill: ${skill}`);
    }
  
    displaySkills(): void {
      console.log("Skills:");
      this.profile.skills.forEach((skill) => console.log(skill));
    }
  }
  
  class ProjectManager {
    private projects: Project[];
  
    constructor() {
      this.projects = [];
    }
  
    fetchProjects(): void {
      this.projects = [
        {
          title: "ZemPosts",
          description: "Post & Connect with Developers",
          url: "https://github.com/Zemerik/ZemPosts",
          image: "assets/projects/zemposts.png",
        },
        {
          title: "ZemShowcase",
          description: "Showcase & Connect with Developers",
          url: "https://github.com/Zemerik/ZemShowcase",
          image: "assets/projects/zemshowcase.png",
        },
      ];
    }
  
    displayProjects(): void {
      this.projects.forEach((project) => {
        console.log(`${project.title}: ${project.description}`);
      });
    }
  }
  
  class WebPage {
    private user: User;
    private projectManager: ProjectManager;
  
    constructor(user: User, projectManager: ProjectManager) {
      this.user = user;
      this.projectManager = projectManager;
    }
  
    renderProfile(): void {
      const profile = this.user.getProfile();
      console.log(`Rendering profile for ${profile.name}`);
      console.log(`Bio: ${profile.bio}`);
      console.log(`Skills: ${profile.skills.join(", ")}`);
    }
  
    loadProjects(): void {
      console.log("Fetching projects...");
      this.projectManager.fetchProjects();
      this.projectManager.displayProjects();
    }
  
    changeTheme(isDarkMode: boolean): void {
      if (isDarkMode) {
        this.user.updateTheme(new DarkTheme());
      } else {
        this.user.updateTheme(new LightTheme());
      }
    }
  }
  
  class FormHandler {
    handleSubmit(formData: Record<string, string>): void {
      console.log("Form submitted:");
      Object.keys(formData).forEach((key) => {
        console.log(`${key}: ${formData[key]}`);
      });
    }
  }
  
  class SwiperHandler {
    private slideIndex: number;
  
    constructor() {
      this.slideIndex = 0;
    }
  
    nextSlide(): void {
      this.slideIndex++;
      console.log(`Switched to slide ${this.slideIndex}`);
    }
  
    previousSlide(): void {
      this.slideIndex--;
      console.log(`Switched to slide ${this.slideIndex}`);
    }
  
    displaySlide(): void {
      console.log(`Displaying slide ${this.slideIndex}`);
    }
  }
  
  
  const user = new User(defaultProfile, new LightTheme());
  const projectManager = new ProjectManager();
  const webPage = new WebPage(user, projectManager);
  
  // Simulating some operations
  webPage.renderProfile();
  webPage.loadProjects();
  user.addSkill("Vue.js");
  webPage.changeTheme(true);
  
  const formHandler = new FormHandler();
  formHandler.handleSubmit({
    name: "Hemang Yadav",
    email: "hemang@zemerik.dev",
    message: "I am interested in collaborating!",
  });
  
  const swiper = new SwiperHandler();
  swiper.nextSlide();
  swiper.displaySlide();
  