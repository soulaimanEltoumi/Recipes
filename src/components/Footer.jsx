import classes from "./Footer.module.css";

export default function Footer() {
  const date = new Date();
  return (
    <footer className={classes.footer}>
      <p>{date.getFullYear()} My Website. All rights reserved.</p>

      <p>
        <a
          href="https://github.com/soulaimanEltoumi/Recipes"
          className={classes.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to GitHub Repository
        </a>
      </p>
    </footer>
  );
}
