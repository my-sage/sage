import React from 'react';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/DropdownInput';

const BudgetEditForm = ({budget, categories, typeBudgets,onChange, loading, errors}) => {

	return (
		<form>

			<TextInput
				name="name"
				label="Name"
				value={budget.name}
				onChange={onChange}
				error={errors.title} />			

			<SelectInput
				name="categoryId"
				label="Category"
				value={budget.categoryId}
				defaultOption="Select the correct Category"
				options={categories}
				onChange={onChange} error={errors.categoryId}/>

			<SelectInput
				name="type"
				label="Type"
				value={budget.type}
				defaultOption="Select the correct type"
				options={typeBudgets}
				onChange={onChange} error={errors.categoryId}/>

			<TextInput
				name="targetAmount"
				label="Target Amount"
				value={budget.targetAmount}
				onChange={onChange}
				error={errors.title} />

		</form>
	)
}

export default BudgetEditForm;