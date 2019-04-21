
const { Selector, t } = require('testcafe');

const elements = {
	developerNameTextField: Selector('#developer-name'),
	reusingJSCodeCheckboxInput: Selector('#reusing-js-code'),
	reusingJSCodeCheckboxLabel: Selector('[for="reusing-js-code"]'),
	contIntgCheckbox: Selector('#continuous-integration-embedding'),
	contIntgCheckboxLabel: Selector('[for="continuous-integration-embedding"]'),
	macOsOperSys: Selector('#macos'),
	submitBtn: Selector('#submit-button'),
	articleHeader: Selector('#article-header'),
	interfaceDropdown: Selector('#preferred-interface'),
	triedTestCafeCheckboxInput: Selector('#tried-test-cafe'),
	slider: Selector('#testcafe-rank'),
	sliderHandle: Selector('.ui-slider-handle'),
	textAreaComments: Selector('#comments'),
}

const interfaceOption = elements.interfaceDropdown.find('option');

fixture `Getting Started`
	.page `http://devexpress.github.io/testcafe/example`;

test ('Select important features', async () => {
	await t
		.setTestSpeed(0.5)
		.expect(elements.reusingJSCodeCheckboxInput.exists).ok()
		.expect(elements.reusingJSCodeCheckboxLabel.innerText).eql('Re-using existing JavaScript code for testing')
		.expect(elements.contIntgCheckbox.exists).ok()
		.expect(elements.contIntgCheckboxLabel.innerText).eql('Easy embedding into a Continuous integration system')
		.click(elements.reusingJSCodeCheckboxInput)
		.click(elements.contIntgCheckbox)
		.expect(elements.reusingJSCodeCheckboxInput.checked).ok()
		.expect(elements.contIntgCheckbox.checked).ok();
});

test ('Select OS', async () => {
	await t
		.setTestSpeed(0.5)
		.expect(elements.macOsOperSys.exists).ok()
		.click(elements.macOsOperSys)
		.expect(elements.macOsOperSys.checked).ok();

});

test ('Select interface', async () => {
	await t
		.setTestSpeed(0.5)
		.click(elements.interfaceDropdown)
		.click(interfaceOption.withText('JavaScript API'))
		.expect(elements.interfaceDropdown.value).eql('JavaScript API');
});

test ('Fill text area what do you think', async t => {
	await t
		.setTestSpeed(0.5)
		.click(elements.triedTestCafeCheckboxInput)
		.expect(elements.slider.hasClass('ui-state-disabled')).notOk()
		.typeText(elements.textAreaComments, 'TestCafe is amazing \nframework!')
		.expect(elements.textAreaComments.value).eql('TestCafe is amazing \nframework!');
});

test ('Fill developer name in text field', async t => {
	await t
		.setTestSpeed(0.5)
		.typeText(elements.developerNameTextField, 'Developer')
		.expect(elements.developerNameTextField.value).eql('Developer')
		.click(elements.submitBtn)
		.expect(elements.articleHeader.innerText).eql('Thank you, Developer!');
});






