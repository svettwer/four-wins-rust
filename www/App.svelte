<script>
    import * as wasm from "four-wins"
	export let name;

    wasm.greet()
</script>

<main>
    <div class="pt-20">
        <div class="p-3 md:container md:mx-auto md:w-2/6 bg-blue-500 object-center border-8 h-auto grid grid-cols-7 gap-4">
            <div>
                <div id="1x6" class="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center"></div>
                <div id="1x5" class="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center"></div>
                <div id="1x4" class="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center"></div>
                <div id="1x3" class="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center"></div>
                <div id="1x2" class="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center"></div>
                <div id="1x1" class="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center"></div>
            </div>
        </div>
    </div>
</main>