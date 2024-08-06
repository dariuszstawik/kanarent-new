import Link from "next/link";
import SectionTitle from "../section-title";
import Button from "../button";

export default function ContactSection() {
  return (
    <>
      <div className="w-full bg-whitesmoke-100" id="kontakt">
        <section
          className={`mx-auto py-28 w-[85%] bg-whitesmoke-100 flex flex-col items-center xl:flex-row justify-between xl:items-start gap-10 box-border text-lg text-white font-poppins mq850:pl-[34px] mq850:pr-[34px] mq850:box-border mq1225:pl-[68px] mq1225:pr-[68px] mq1225:box-border mq1525:flex-wrap`}
        >
          {/* <div className="h-[1172px] w-[1600px] relative bg-whitesmoke-100 hidden max-w-full" /> */}
          <div className="contactForm__contactInformation w-[522px] flex flex-col items-start justify-start gap-[50px] max-w-full text-xl text-forestgreen-100 mq850:gap-[25px]">
            <SectionTitle isAlignedLeft>Skontaktuj się z nami</SectionTitle>
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq850:gap-[25px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[25px] max-w-full shrink-0 mq850:flex-wrap">
                <img
                  className="h-[74.9px] w-20 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="icon.svg"
                />

                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.9px] box-border min-w-[271px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch relative capitalize font-semibold z-[1] mq450:text-base">
                      Nasz adres
                    </div>
                    <div className="self-stretch relative text-lg capitalize text-dimgray z-[1]">
                      ul. Wolności 94 42-460 Mierzęcice
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start gap-[25px] max-w-full shrink-0 mq850:flex-wrap">
                <div className="rounded-3xs flex flex-row items-start justify-start pt-[18px] pb-[19px] pr-[22px] pl-[23px] z-[1] border-[1px] border-solid border-forestgreen-100">
                  <div className="h-[74.9px] w-20 relative rounded-3xs box-border hidden border-[1px] border-solid border-forestgreen-100"></div>
                  <img
                    className="h-[34.4px] w-[34.4px] relative z-[1]"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.9px] box-border min-w-[271px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch relative capitalize font-semibold z-[1] mq450:text-base">
                      Telefon
                    </div>
                    <a
                      className="self-stretch relative text-lg capitalize text-dimgray [text-decoration:none] z-[1]"
                      href="tel:(+48) 608 777 419"
                      target="_blank"
                    >
                      (+48) 608 777 419
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[25px] max-w-full mq850:flex-wrap">
              <div className="rounded-3xs flex flex-row items-start justify-start p-[22px] z-[1] border-[1px] border-solid border-forestgreen-100">
                <div className="h-[74.9px] w-20 relative rounded-3xs box-border hidden border-[1px] border-solid border-forestgreen-100"></div>
                <img
                  className="h-[27px] w-9 relative z-[1]"
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.9px] box-border min-w-[271px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch relative capitalize font-semibold z-[1] mq450:text-base">
                    Adres e-mail
                  </div>
                  <a
                    className="self-stretch relative text-lg lowercase text-dimgray [text-decoration:none] whitespace-nowrap z-[1]"
                    href="mailto:biuro@kana.rent"
                    target="_blank"
                  >
                    biuro@kana.rent
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col items-start justify-start pt-[789px] px-0 pb-0">
          <img
            className="w-[113.5px] h-[111.5px] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/vector-6791.svg"
          />
        </div> */}

          <div
            className="w-full xl:w-1/2 pt-10 flex flex-col gap-10 relative bg-forestgreen-300"
            id="contactSection"
          >
            {/* <SectionTitle>Wyślij wiadomość</SectionTitle> */}
            <h2 className="w-3/4 mx-auto text-white">Wyślij wiadomość</h2>
            <form
              // ref={form}
              // onSubmit={sendEmail}
              className="relative w-3/4 mx-auto mt-2 flex flex-col gap-2"
            >
              <label
                htmlFor="usersName"
                className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
              >
                Imię i nazwisko
              </label>
              <input
                id="userName"
                name="userName"
                type="text"
                required
                className="relative border border-primaryGreen rounded-xl leading-8 px-4"
              ></input>

              <label
                htmlFor="email"
                className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
              >
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+"
                className="border border-primaryGreen rounded-xl leading-8 px-4"
              ></input>

              <label htmlFor="phone" className="uppercase">
                telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="border border-primaryGreen rounded-xl leading-8 px-4"
              ></input>

              <label
                htmlFor="message"
                className="inline-block  mr-auto relative uppercase after:content-['*'] after:text-primaryGreen after:absolute after:-right-[10px] after:-top-[2px]"
              >
                wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="border border-primaryGreen rounded-xl leading-8 px-4"
              ></textarea>

              <div className="flex justify-start items-start mt-6 mb-2">
                <input
                  type="checkbox"
                  id="privacyTermsCheckbox"
                  required
                  className="mr-2"
                />
                <label
                  htmlFor="privacyTermsCheckbox"
                  className="-translate-y-2 relative before:content-['*'] before:text-smartOrange before:mr-2"
                >
                  Akceptuję{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-primaryGreen"
                  >
                    Politykę Prywatności
                  </Link>
                  .
                </label>
              </div>

              <Button isWhite type="submit" className="ml-auto px-8 mt-4 mb-10">
                Wyślij &gt;
              </Button>
              {/* {showNotification && (
                <div className="text-primaryGreen text-2xl p-2 rounded absolute bottom-0 left-0">
                  Wiadomość wysłana. Dziękujemy!
                </div>
              )} */}
            </form>
          </div>

          {/* <div className="contactSection__contactForm max-w-[1326px] flex flex-col items-start justify-start min-h-[762px] shrink-0 ml-auto">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="xl:w-[621px] flex flex-col items-start justify-start py-[45px] px-[50px] box-border relative gap-[30px] max-w-full z-[1] mq850:gap-[15px] mq850:pl-[25px] mq850:pr-[25px] mq850:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/group-28@2x.png"
                />
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px] text-center text-[30px]">
                  <h2 className="m-0 relative text-inherit capitalize font-bold font-inherit z-[1] mq450:text-lg mq850:text-5xl">
                    Wypełnij formularz
                  </h2>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[30px] mq850:flex-wrap">
                  <div className="flex-1 rounded-3xs bg-white flex flex-row items-start justify-between py-4 px-5 box-border min-w-[160px] gap-[20px] z-[1]">
                    <div className="h-[59px] w-[245px] relative rounded-3xs bg-white hidden" />
                    <input
                      className="w-[39px] [border:none] [outline:none] font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-gray-100 text-left inline-block p-0 z-[1]"
                      placeholder="Imię"
                      type="text"
                    />
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative z-[1]"
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-[0.9709] rounded-3xs bg-white flex flex-row items-start justify-between py-4 pr-[21px] pl-[25px] box-border min-w-[160px] gap-[20px] z-[1] mq450:flex-1">
                    <div className="h-[59px] w-[246px] relative rounded-3xs bg-white hidden" />
                    <input
                      className="w-[83px] [border:none] [outline:none] font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-gray-100 text-left inline-block p-0 z-[1]"
                      placeholder="nazwisko"
                      type="text"
                    />
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative z-[1]"
                        alt=""
                        src="/vector-6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-between py-4 px-5 box-border max-w-full gap-[20px] z-[1]">
                  <div className="h-[59px] w-[521px] relative rounded-3xs bg-white hidden max-w-full" />
                  <input
                    className="w-[113px] [border:none] [outline:none] font-poppins text-lg bg-[transparent] h-[27px] relative capitalize text-gray-100 text-left inline-block p-0 z-[1]"
                    placeholder="Adres e-mail"
                    type="text"
                  />
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border w-[22px] h-[22px]">
                    <img
                      className="w-[22px] h-[17px] relative z-[1]"
                      alt=""
                      src="/vector-8.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-between py-4 px-5 box-border max-w-full gap-[20px] z-[1] text-gray-100">
                  <div className="h-[59px] w-[521px] relative rounded-3xs bg-white hidden max-w-full" />
                  <div className="relative capitalize z-[1]">
                    Numer telefonu
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-[21px] h-[21px] relative z-[1]"
                      alt=""
                      src="/vector-9.svg"
                    />
                  </div>
                </div>
                <textarea
                  className="[border:none] bg-white h-[179px] w-auto [outline:none] self-stretch rounded-3xs flex flex-row items-start justify-start py-4 px-5 box-border font-poppins text-lg text-gray-100 z-[1]"
                  placeholder="Wiadomość ..."
                  rows={9}
                  cols={26}
                />
                <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq850:flex-wrap">
                  <div className="h-[27px] w-[31px] relative rounded-3xs bg-white z-[1]" />
                  <div className="relative capitalize font-medium inline-block max-w-full z-[1]">
                    Zgadzam się z Polityką Prywatności
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-4 px-5 bg-white self-stretch rounded-11xl flex flex-row items-start justify-center z-[1] hover:bg-gainsboro-100">
                  <div className="relative text-lg capitalize font-medium font-poppins text-forestgreen-300 text-left inline-block min-w-[66px]">
                    Wysłać
                  </div>
                </button>
              </div>
            </div>

          </div> */}
        </section>
      </div>
    </>
  );
}
