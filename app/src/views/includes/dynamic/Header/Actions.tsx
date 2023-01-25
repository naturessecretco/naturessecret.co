export default function Actions({ actions }) {
    return (
        <div class="w-auto ml-2">
            <a href="#">
                <svg
                    class="text-green-700 navbar-burger"
                    width={51}
                    height={51}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <rect width={56} height={56} rx={28} fill="currentColor" />
                    <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </a>
        </div>
    )
}