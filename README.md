
# List Component

List component for React

Install and save component as a dependency

```

npm install --save library-list-component

```

Import component into your app

```

import List from 'library-list-component'

```

Create an array of objects with the key being data

```

const listData = [
	{
		data: "Item one",
		content: [
			{
				data: "Sub item one"
			}
		]
	},
	{
		data: "Item two"
	},
	{
		data: "Item three"
	},
	{
		data: "Item four"
	},
	{
		data: "Item five"
	}
]

```

Render the component with the object array we created as well as any other props that are needed

```

render () {
	const listData = [
		{
			data: "Item one",
			content: [
				{
					data: "Sub item one"
				}
			]
		},
		{
			data: "Item two"
		},
		{
			data: "Item three"
		},
		{
			data: "Item four"
		},
		{
			data: "Item five"
		}
	]

	return (
		<ListComponent 
			listData={listData}
			listStyleType="roman"
			listAlign="left"
			listInline={false}
			subListStyleType="default" />
	)
}

```

| Prop             | Values                                 |
| :--------------- | :------------------------------------- |
| listData         | Object                                 |
| listStyleType    | default, circle, decimal, alpha, roman |
| listAlign        | left, right, center                    |
| listInline       | true or false                          |
| subListStyleType | default, circle, decimal, alpha, roman |
