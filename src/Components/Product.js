export function Product({ data }){

    return(
        <tr className="border-b bg-gray-800 border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {data.name}
            </th>
            <td className="px-6 py-4">
                {data.level}
            </td>
            <td className="px-6 py-4">
                {data.category}
            </td>
            <td className="px-6 py-4">
                {data.code_barre}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    )
}