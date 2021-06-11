import React, { useEffect, useState } from 'react';

interface Props {
	children: React.ReactNode;
}
const ClientOnly: React.FC<Props> = (props) => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return <div>{props.children}</div>;
};

export default ClientOnly;
