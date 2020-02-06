/**
 * @format
*  @flow
 */

import 'react-native';
import React from 'react';
import AppContainer from './index';
import { TEST_IDS } from './constants';

// Note: test renderer must be required after react-native.
import {render} from 'react-native-testing-library';

describe('<AppContainer />', () => {

    it('renders', () => {
        const element = render(<AppContainer />);

        expect(element).toBeDefined();
    });

    it('throws an error', () => {
        const element = render(<AppContainer />);

        expect(element.queryAllByTestId(TEST_IDS.ERROR_VIEW)).toBeDefined();
    });

})
