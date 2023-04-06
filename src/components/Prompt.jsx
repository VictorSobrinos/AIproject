export function Prompt() {
    return (
        <div>
            <label
                for="UserEmail"
                class="block text-xs font-medium text-gray-700 dark:text-gray-200"
            >
                Prompt
            </label>

            <textarea
                type="email"
                id="UserEmail"
                placeholder=""
                class="mt-1 w-full rounded-md border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />
        </div>

    )
}