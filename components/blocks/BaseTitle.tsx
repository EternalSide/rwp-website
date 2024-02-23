interface Props {
	title: string;
}

const BaseTitle = ({title}: Props) => {
	return <div>{title}</div>;
};
export default BaseTitle;
