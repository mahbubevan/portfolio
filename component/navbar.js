export default function Navbar(){
    return (
<ul class="flex justify-end mr-5 pt-5">
  <li class="-mb-px mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">About</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Projects</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Blogs</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Contact</a>
  </li>
</ul>
    )
}