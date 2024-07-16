import classes from "./Footer.module.css";

export default function Footer() {
  const date = new Date();
  return (
    <footer className={classes.footer}>
      <p>{date.getFullYear()} My Website. All rights reserved.</p>
      <p>link to github repository </p>
    </footer>
  );
}
