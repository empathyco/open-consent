const styles = `

:host {
  all: initial;
  display: block;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pbc-button {
  width: var(--width, 16.875rem);
  height: var(--xl-space);
  background-color: var(--background-color-button);
  padding: var(--xxs-space) var(--s-space);
  border: 0.0625rem solid var(--color--black);
  border-radius: calc(var(--width, 16.875rem) / 2);
  cursor: pointer;
  transition: background-color 0.5s ease;
}

.pbc-banner__link {
  color: var(--link-color);
  font-family: 'Montserrat-Semibold', sans-serif;
}

.pbc-button__text {
  font-family: var(--typography);
  font-size: var(--font-size--tiny);
  text-transform: uppercase;
  color: var(--text-color-button);
}

.pbc-button:hover {
  background-color: var(--hover-color-button);
}

.pbc-button-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color-card);
  gap: var(--s-space);
  padding: var(--s-space);
  border-radius: var(--xs-space);
  transition: background-color 0.5s ease;
  cursor: pointer;
}

.pbc-button-card__icon {
  margin-right: var(--s-15-space);
  margin-top: var(--xxxs-space);
}

.pbc-button-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--xs-space);
}

.pbc-button-card__content--pill {
  flex-direction: row-reverse;
  align-items: center;
}

.pbc-button-card,
.pbc-button-card--pill {
  gap: var(--xs-space);
}

.pbc-button-card__button {
  white-space: nowrap;
}

.pbc-button-card__button--pill {
  width: auto;
}

.pbc-button-card__text {
  font-family: var(--typography);
  font-size: var(--font-size--extra-small);
}

.pbc-button-card--pill {
  position: fixed;
  height: var(--xxl-space);
  flex-direction: row;
  align-items: center;
  gap: 0;
  z-index:2147483647;
  padding: var(--xs-space) var(--xs-space) var(--xs-space) var(--s-14-space);
  border-radius: var(--xl-36-space);
  margin-bottom: var(--s-space);
  box-shadow: 0 var(--xs-space) var(--x-space) 0 rgba(0, 0, 0, 0.12);
}

.pbc-button-card--pill-bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.pbc-button-card--pill-bottom-left {
  bottom: 0;
  left: 0;
  margin-left: var(--s-space);
}

.pbc-button-card--pill-bottom-right {
  right: 0;
  bottom: 0;
  margin-right: var(--s-space);
}

.pbc-button-card--pill-big {
  width: 18.75rem;
}

.pbc-button-card--pill-medium {
  width: 13.5rem;
}

.pbc-button-card--pill-small {
  width: 3.125rem;
  justify-content: center;
  padding-left: var(--xs-space);
}

.pbc-button-card:hover {
  background-color: var(--hover-color-card);
}

.pbc-banner {
  position: fixed;
  z-index: 2147483647;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 40.875rem;
  margin: auto;
  padding: var(--x-space);
  background: var(--color--white);
  box-shadow: 0 var(--xxs-8-space) var(--x-space) 0 rgba(0, 0, 0, 0.12);
  gap: var(--x-space);
}

.pbc-banner__text {
  font-family: var(--typography);
  font-size: var(--font-size--extra-small);
}

.pbc-banner__text--title {
  font-size: var(--font-size--extra-large);
}

.pbc-banner__button-card-container {
  display: flex;
  gap: var(--s-space);
}

.pbc-banner__button-card-container--vertical {
  flex-direction: column;
}

.pbc-banner--top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: var(--sm-space);
}

.pbc-banner--bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: var(--sm-space) var(--sm-space) 0 0;
}

.pbc-banner--top-left {
  top: 0;
  left: 0;
  border-radius: var(--sm-space);
}

.pbc-banner--top-right {
  top: 0;
  right: 0;
  border-radius: var(--sm-space);
}

.pbc-banner--bottom-left {
  bottom: 0;
  left: 0;
  border-radius: var(--sm-space) var(--sm-space) 0 0;
}

.pbc-banner--bottom-right {
  right: 0;
  bottom: 0;
  border-radius: var(--sm-space) var(--sm-space) 0 0;
}

.pbc-banner--center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--sm-space);
}

.pbc-banner--vertical {
  max-width: 21.25rem;
}

.pbc-banner--animation-enter-active,
.pbc-banner--animation-leave-active {
  transition: all 0.7s cubic-bezier(.53, 0, .48, .93);
}

.pbc-banner--animation-enter-from,
.pbc-banner--animation-enter-to,
.pbc-banner--animation-leave-to {
  opacity: 0;
}

.pbc-banner--animation-enter-to {
  opacity: 1;
}

.pbc-dark-mask {
  position: fixed;
  z-index: 2147483647;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  background-color: rgba(0, 0, 0, 0.2);
}

.red--theme {
  --background-color-card: var(--color--light-gray);
  --hover-color-card: var(--color--dark-pink);
  --background-color-button: var(color--white);
  --text-color-button: var(--color--black);
  --hover-color-button: var(color--white);
  --link-color: var(--color--dark-pink);
}

.green--theme {
  --background-color-card: var(--color--light-gray);
  --hover-color-card: var(--color--light-green);
  --background-color-button: var(--color--white);
  --text-color-button:var(--color--black);
  --hover-color-button: var(--color--white);
  --link-color: var(--color--light-green);
}

.blue--theme {
  --background-color-card: var(--color--light-gray);
  --hover-color-card: var(--color--dark-blue);
  --background-color-button: var(--color--white);
  --text-color-button:var(--color--black);
  --hover-color-button: var(--color--white);
  --link-color: var(--color--dark-blue);
}

.yellow--theme {
  --background-color-card: var(--color--light-gray);
  --hover-color-card: var(--color--dark-yellow);
  --background-color-button: var(--color--white);
  --text-color-button:var(--color--black);
  --hover-color-button: var(--color--white);
  --link-color: var(--color--dark-yellow);
  
}

.white--theme {
  --background-color-card: var(--color--light-gray);
  --hover-color-card: var(--color--white);
  --background-color-button: var(--color--white);
  --text-color-button:var(--color--black);
  --hover-color-button: var(--color--white);
  --link-color: var(--color--black);
}

.black--theme {
  --background-color-card: var(--color--light-gray);
  --hover-color-card: var(--color--black);
  --background-color-button: var(--color--white);
  --text-color-button:var(--color--black);
  --hover-color-button: var(--color--white);
  --link-color: var(--color--black);
}

.inter {
  --typography: 'Inter-Light', sans-serif;
}

.poppins {
  --typography: 'Poppins-Light', sans-serif;
}

.montserrat {
  --typography: 'Montserrat-Light', sans-serif;
}

.arvo {
  --typography: 'Arvo-Regular', sans-serif;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  }

`;

export default styles;