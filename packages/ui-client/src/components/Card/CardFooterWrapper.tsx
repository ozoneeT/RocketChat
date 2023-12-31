import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';

const CardFooterWrapper = ({ children }: { children: ReactNode }): ReactElement => <Box mbs={16}>{children}</Box>;

export default CardFooterWrapper;
