import { PropsSvg } from "../../../types/interfaces";

export const SvgCollection = ({ id }: PropsSvg) => {
  switch (id) {
    case "Arrow":
      return (
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L19 7M19 7L13 13M19 7H1"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "EyeClosed":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8578 11.9346L20.9962 15.6384"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.4546 13.9937L15.1215 17.7759"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.53717 13.9917L8.87015 17.7746"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.13831 11.9316L2.98958 15.6533"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.99994 9.83203C4.57611 11.783 7.46564 14.25 12 14.25C16.5343 14.25 19.4239 11.783 21 9.83205"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "EyeOpened":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5.24951C4.5 5.24951 1.5 12.0002 1.5 12.0002C1.5 12.0002 4.5 18.7495 12 18.7495C19.5 18.7495 22.5 12.0002 22.5 12.0002C22.5 12.0002 19.5 5.24951 12 5.24951Z"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z"
            stroke="#363636"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.87625 18V9.94922H0V6.75H2.87625V4.2293C2.87625 1.49063 4.66125 0 7.2675 0C8.51625 0 9.58875 0.0878906 9.9 0.126562V2.98828H8.0925C6.675 2.98828 6.40125 3.62109 6.40125 4.5457V6.75H9.6L9.16125 9.94922H6.40125V18"
            fill="#363636"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8.92554C4 5.99967 6 3.92554 9 3.92554C12.0017 3.92554 14 5.90735 14 9C14 12.0003 12.0017 13.9255 9.00201 13.9255C6.00234 13.9255 4 12.0003 4 8.92554ZM6.00234 9C6.00234 10.6548 7.35159 12.0003 9.00201 12.0003C10.6524 12.0003 12.0017 10.6548 12.0017 9C12.0017 7.3452 10.6564 5.99967 9.00201 5.99967C7.34757 5.99967 6.00234 7.3452 6.00234 9ZM14.8047 5.27268C15.399 5.27268 15.8809 4.79471 15.8809 4.19625C15.8809 3.60181 15.399 3.11983 14.8047 3.11983C14.2104 3.11983 13.7285 3.60181 13.7285 4.19625C13.7285 4.7907 14.2064 5.27268 14.8047 5.27268ZM16.4831 1.51724C17.5392 2.56956 17.8685 3.84681 17.9368 5.28874C18.0211 6.77485 18.0211 11.2251 17.9368 12.7113C17.8645 14.1532 17.5352 15.4304 16.4831 16.4828C15.431 17.5391 14.154 17.8685 12.7124 17.9367C11.2267 18.0211 6.77334 18.0211 5.28756 17.9367C3.84596 17.8644 2.57301 17.5351 1.5169 16.4828C0.460792 15.4304 0.131511 14.1532 0.063246 12.7113C-0.021082 11.2251 -0.021082 6.77083 0.063246 5.28473C0.135527 3.8428 0.460792 2.56555 1.5169 1.51322C2.57301 0.460895 3.84997 0.131541 5.28756 0.0632601C6.77334 -0.0210867 11.2267 -0.0210867 12.7124 0.0632601C14.154 0.135557 15.431 0.464911 16.4831 1.51724Z"
            fill="#363636"
          />
        </svg>
      );
    case "VK":
      return (
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4986 0.895125C21.6497 0.3795 21.4986 0 20.7716 0H18.3661C17.7535 0 17.4717 0.325875 17.3206 0.688875C17.3206 0.688875 16.0954 3.70425 14.3637 5.6595C13.8042 6.22462 13.5469 6.40612 13.2406 6.40612C13.0895 6.40612 12.8567 6.22462 12.8567 5.709V0.895125C12.8567 0.276375 12.6852 0 12.1787 0H8.39687C8.01297 0 7.78426 0.28875 7.78426 0.556875C7.78426 1.14262 8.65009 1.27875 8.73993 2.92875V6.50925C8.73993 7.293 8.60108 7.43737 8.29477 7.43737C7.47795 7.43737 5.49309 4.40963 4.31687 0.944625C4.08 0.27225 3.84721 0 3.23051 0H0.824984C0.138859 0 1.55795e-08 0.325875 1.55795e-08 0.688875C1.55795e-08 1.33237 0.816816 4.52925 3.80228 8.75325C5.79123 11.6366 8.59291 13.2 11.1414 13.2C12.6729 13.2 12.8608 12.8535 12.8608 12.2554C12.8608 9.49988 12.7219 9.24 13.4897 9.24C13.845 9.24 14.4577 9.4215 15.8871 10.8116C17.5207 12.4616 17.7903 13.2 18.7051 13.2H21.1106C21.7967 13.2 22.1439 12.8535 21.9438 12.1687C21.4864 10.7291 18.3947 7.76737 18.2558 7.56937C17.9005 7.10737 18.0026 6.90112 18.2558 6.48862C18.2599 6.4845 21.1964 2.31 21.4986 0.895125Z"
            fill="#363636"
          />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.02901 19H0.297255V6.31495H4.02901V19ZM2.16112 4.5846C0.968087 4.5846 0 3.54129 0 2.2817C0 1.0221 0.968087 0 2.16112 0C3.35416 0 4.32225 1.0221 4.32225 2.2817C4.32225 3.54129 3.35416 4.5846 2.16112 4.5846ZM17.996 19H14.2723V12.825C14.2723 11.3533 14.2441 9.46607 12.3321 9.46607C10.3919 9.46607 10.0946 11.065 10.0946 12.719V19H6.36688V6.31495H9.94599V8.04531H9.99821C10.4963 7.04866 11.7135 5.99687 13.5291 5.99687C17.3051 5.99687 18 8.6221 18 12.0319V19H17.996Z"
            fill="#363636"
          />
        </svg>
      );
    case "Search":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.3335 2.66671C4.75617 2.66671 2.66683 4.75605 2.66683 7.33337C2.66683 9.9107 4.75617 12 7.3335 12C9.91083 12 12.0002 9.9107 12.0002 7.33337C12.0002 4.75605 9.91083 2.66671 7.3335 2.66671ZM1.3335 7.33337C1.3335 4.01967 4.01979 1.33337 7.3335 1.33337C10.6472 1.33337 13.3335 4.01967 13.3335 7.33337C13.3335 10.6471 10.6472 13.3334 7.3335 13.3334C4.01979 13.3334 1.3335 10.6471 1.3335 7.33337Z"
            fill="#A7A7A7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6284 10.6286C10.8887 10.3683 11.3108 10.3683 11.5712 10.6286L14.4712 13.5286C14.7315 13.789 14.7315 14.2111 14.4712 14.4714C14.2108 14.7318 13.7887 14.7318 13.5284 14.4714L10.6284 11.5714C10.368 11.3111 10.368 10.889 10.6284 10.6286Z"
            fill="#A7A7A7"
          />
        </svg>
      );
    case "ActionSearch":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.33337 2.66671C4.75605 2.66671 2.66671 4.75605 2.66671 7.33337C2.66671 9.9107 4.75605 12 7.33337 12C9.9107 12 12 9.9107 12 7.33337C12 4.75605 9.9107 2.66671 7.33337 2.66671ZM1.33337 7.33337C1.33337 4.01967 4.01967 1.33337 7.33337 1.33337C10.6471 1.33337 13.3334 4.01967 13.3334 7.33337C13.3334 10.6471 10.6471 13.3334 7.33337 13.3334C4.01967 13.3334 1.33337 10.6471 1.33337 7.33337Z"
            fill="url(#paint0_linear_28522_39119)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6286 10.6286C10.889 10.3683 11.3111 10.3683 11.5714 10.6286L14.4714 13.5286C14.7318 13.789 14.7318 14.2111 14.4714 14.4714C14.2111 14.7318 13.789 14.7318 13.5286 14.4714L10.6286 11.5714C10.3683 11.3111 10.3683 10.889 10.6286 10.6286Z"
            fill="url(#paint1_linear_28522_39119)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_28522_39119"
              x1="7.32308"
              y1="-11.4166"
              x2="-39.1246"
              y2="22.6654"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F83600" />
              <stop offset="1" stopColor="#F9D423" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_28522_39119"
              x1="12.5464"
              y1="5.93543"
              x2="-3.83933"
              y2="17.9588"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F83600" />
              <stop offset="1" stopColor="#F9D423" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "Rating":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.9">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 4C2.5 3.72386 2.72386 3.5 3 3.5H11.4999C11.7761 3.5 11.9999 3.72386 11.9999 4C11.9999 4.27614 11.7761 4.5 11.4999 4.5H3C2.72386 4.5 2.5 4.27614 2.5 4ZM11.5 6.5C11.7761 6.5 12 6.72386 12 7V11.793L13.6464 10.1468C13.8417 9.95155 14.1583 9.95157 14.3535 10.1468C14.5488 10.3421 14.5487 10.6587 14.3535 10.854L11.8536 13.3535L11.8535 13.3536C11.7631 13.444 11.6381 13.5 11.5 13.5L11.497 13.5C11.4303 13.4996 11.3667 13.4861 11.3086 13.4621C11.2496 13.4377 11.1944 13.4015 11.1464 13.3536L8.64645 10.8536C8.45118 10.6583 8.45118 10.3417 8.64645 10.1464C8.84171 9.95118 9.15829 9.95118 9.35355 10.1464L11 11.7929V7C11 6.72386 11.2239 6.5 11.5 6.5ZM3 7.5C2.72386 7.5 2.5 7.72386 2.5 8C2.5 8.27614 2.72386 8.5 3 8.5H7.49994C7.77608 8.5 7.99994 8.27614 7.99994 8C7.99994 7.72386 7.77608 7.5 7.49994 7.5H3ZM3 11.5C2.72386 11.5 2.5 11.7239 2.5 12C2.5 12.2761 2.72386 12.5 3 12.5H6.5C6.77614 12.5 7 12.2761 7 12C7 11.7239 6.77614 11.5 6.5 11.5H3Z"
              fill="#A7A7A7"
            />
          </g>
        </svg>
      );
    case "ListViewActive":
      return (
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ddd_28512_7870)">
            <circle cx="24" cy="23" r="19" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5227 15.875C17.165 15.875 16.875 16.165 16.875 16.5227V21.7045C16.875 22.0623 17.165 22.3523 17.5227 22.3523H22.7045C23.0623 22.3523 23.3523 22.0623 23.3523 21.7045V16.5227C23.3523 16.165 23.0623 15.875 22.7045 15.875H17.5227ZM18.1705 21.0568V17.1705H22.0568V21.0568H18.1705ZM25.2955 15.875C24.9377 15.875 24.6477 16.165 24.6477 16.5227V21.7045C24.6477 22.0623 24.9377 22.3523 25.2955 22.3523H30.4773C30.835 22.3523 31.125 22.0623 31.125 21.7045V16.5227C31.125 16.165 30.835 15.875 30.4773 15.875H25.2955ZM25.9432 21.0568V17.1705H29.8295V21.0568H25.9432ZM16.875 24.2955C16.875 23.9377 17.165 23.6477 17.5227 23.6477H22.7045C23.0623 23.6477 23.3523 23.9377 23.3523 24.2955V29.4773C23.3523 29.835 23.0623 30.125 22.7045 30.125H17.5227C17.165 30.125 16.875 29.835 16.875 29.4773V24.2955ZM18.1705 24.9432V28.8295H22.0568V24.9432H18.1705ZM25.2955 23.6477C24.9377 23.6477 24.6477 23.9377 24.6477 24.2955V29.4773C24.6477 29.835 24.9377 30.125 25.2955 30.125H30.4773C30.835 30.125 31.125 29.835 31.125 29.4773V24.2955C31.125 23.9377 30.835 23.6477 30.4773 23.6477H25.2955ZM25.9432 28.8295V24.9432H29.8295V28.8295H25.9432Z"
              fill="#A7A7A7"
            />
          </g>
          <defs>
            <filter
              id="filter0_ddd_28512_7870"
              x="0"
              y="0"
              width="48"
              height="49"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.748125 0 0 0 0 0.767812 0 0 0 0 0.7875 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_28512_7870"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.748125 0 0 0 0 0.767812 0 0 0 0 0.7875 0 0 0 0.18 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_28512_7870"
                result="effect2_dropShadow_28512_7870"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.748125 0 0 0 0 0.767812 0 0 0 0 0.7875 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_28512_7870"
                result="effect3_dropShadow_28512_7870"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_28512_7870"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "ListView":
      return (
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ddd_28522_32950)">
            <circle cx="24" cy="23" r="19" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0833 22.9999C16.0833 22.5627 16.4378 22.2083 16.875 22.2083H31.125C31.5622 22.2083 31.9167 22.5627 31.9167 22.9999C31.9167 23.4371 31.5622 23.7916 31.125 23.7916H16.875C16.4378 23.7916 16.0833 23.4371 16.0833 22.9999Z"
              fill="#A7A7A7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0833 18.2499C16.0833 17.8127 16.4378 17.4583 16.875 17.4583H31.125C31.5622 17.4583 31.9167 17.8127 31.9167 18.2499C31.9167 18.6871 31.5622 19.0416 31.125 19.0416H16.875C16.4378 19.0416 16.0833 18.6871 16.0833 18.2499Z"
              fill="#A7A7A7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0833 27.7499C16.0833 27.3127 16.4378 26.9583 16.875 26.9583H31.125C31.5622 26.9583 31.9167 27.3127 31.9167 27.7499C31.9167 28.1871 31.5622 28.5416 31.125 28.5416H16.875C16.4378 28.5416 16.0833 28.1871 16.0833 27.7499Z"
              fill="#A7A7A7"
            />
          </g>
          <defs>
            <filter
              id="filter0_ddd_28522_32950"
              x="0"
              y="0"
              width="48"
              height="49"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.748125 0 0 0 0 0.767812 0 0 0 0 0.7875 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_28522_32950"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.748125 0 0 0 0 0.767812 0 0 0 0 0.7875 0 0 0 0.18 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_28522_32950"
                result="effect2_dropShadow_28522_32950"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.748125 0 0 0 0 0.767812 0 0 0 0 0.7875 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_28522_32950"
                result="effect3_dropShadow_28522_32950"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_28522_32950"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      );
    case "NegativeImg":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            fill="#F42C4F"
            stroke="#F42C4F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10V17"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 22.75C16.6904 22.75 17.25 22.1904 17.25 21.5C17.25 20.8096 16.6904 20.25 16 20.25C15.3096 20.25 14.75 20.8096 14.75 21.5C14.75 22.1904 15.3096 22.75 16 22.75Z"
            fill="white"
          />
        </svg>
      );
    case "CrossImg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
            fill="#363636"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="#363636"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
