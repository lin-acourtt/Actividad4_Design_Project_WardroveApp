

const Component_PhotoIcons = ({ src }) => {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl">
      <img src={src} className="h-full w-full object-cover" />

      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="rounded-full bg-white p-3 text-pink-600 ">
            <svg class="outline outline-olive-400 outline-2 outline-offset-10 rounded-full w-6 h-6 text-green-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#7ca288" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>
        </button>
        <button className="rounded-full bg-white p-3 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="outline outline-red-300 outline-2 outline-offset-10 rounded-full h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#c07c8d">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-7 0h8m-4-3h-2a1 1 0 00-1 1v1h4V5a1 1 0 00-1-1z" />
            </svg>
        </button>
      </div>
    </div>
  );
};


export default Component_PhotoIcons;