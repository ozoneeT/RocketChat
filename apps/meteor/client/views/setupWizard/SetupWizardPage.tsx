import type { ReactElement } from 'react';
import React from 'react';

import { useSetupWizardContext } from './contexts/SetupWizardContext';
import AdminInfoStep from './steps/AdminInfoStep';
import CloudAccountConfirmation from './steps/CloudAccountConfirmation';
import RegisterServerStep from './steps/RegisterServerStep';

const SetupWizardPage = (): ReactElement => {
	const { currentStep } = useSetupWizardContext();

	switch (currentStep) {
		case 1:
			return <AdminInfoStep />;
		case 2:
			return <RegisterServerStep />;
		case 3:
			return <CloudAccountConfirmation />;

		default:
			throw new Error('Wrong wizard step');
	}
};

export default SetupWizardPage;
