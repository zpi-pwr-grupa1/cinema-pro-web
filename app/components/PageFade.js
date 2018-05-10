import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PageFade = (props) => (
	<CSSTransition
		{...props}
		classNames="fadeTranslate"
		timeout={1000}
		mountOnEnter={true}
		unmountOnExit={true}
	/>
)