type User = {
    name: string;
    age: number;
    skills: string[];
  };
  
  class UserProfile {
    private user: User;
  
    constructor(user: User) {
      this.user = user;
    }
  
    getUserInfo(): string {
      return `${this.user.name}, Age: ${this.user.age}`;
    }
  
    addSkill(skill: string): void {
      this.user.skills.push(skill);
    }
  
    displaySkills(): void {
      this.user.skills.forEach((skill) => {
        console.log(`Skill: ${skill}`);
      });
    }
  }
  
  class Theme {
    backgroundColor: string;
    textColor: string;
  
    constructor(bg: string, text: string) {
      this.backgroundColor = bg;
      this.textColor = text;
    }
  
    applyTheme(): void {
      console.log(`Theme applied: Background - ${this.backgroundColor}, Text - ${this.textColor}`);
    }
  }
  
  class Project {
    title: string;
    description: string;
  
    constructor(title: string, description: string) {
      this.title = title;
      this.description = description;
    }
  
    displayProject(): void {
      console.log(`Project: ${this.title} - ${this.description}`);
    }
  }
  
  class WebPage {
    private profile: UserProfile;
    private theme: Theme;
    private projects: Project[] = [];
  
    constructor(profile: UserProfile, theme: Theme) {
      this.profile = profile;
      this.theme = theme;
    }
  
    renderProfile(): void {
      console.log(this.profile.getUserInfo());
      this.profile.displaySkills();
    }
  
    addProject(project: Project): void {
      this.projects.push(project);
    }
  
    loadProjects(): void {
      this.projects.forEach((project) => {
        project.displayProject();
      });
    }
  
    applyTheme(): void {
      this.theme.applyTheme();
    }
  }
  
  const user: User = {
    name: "Hemang Yadav",
    age: 15,
    skills: ["HTML", "JavaScript", "Python"],
  };
  
  const userProfile = new UserProfile(user);
  const darkTheme = new Theme("#121212", "#FFFFFF");
  
  const project1 = new Project("ZemPosts", "Post & Connect with Developers");
  const project2 = new Project("ZemShowcase", "Showcase & Connect with Developers");
  
  const myWebPage = new WebPage(userProfile, darkTheme);
  
  myWebPage.renderProfile();
  myWebPage.addProject(project1);
  myWebPage.addProject(project2);
  myWebPage.loadProjects();
  myWebPage.applyTheme();
  
  userProfile.addSkill("Vue.js");
  userProfile.displaySkills();
  