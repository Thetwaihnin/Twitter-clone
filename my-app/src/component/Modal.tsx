"use client";

// import { DangerIcon } from "hugeicons-react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { HeartAddIcon, SparklesIcon } from "hugeicons-react";

export default function Modal() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
        <div className="flex h-screen items-center justify-center p-4 text-center">
          <DialogPanel
            transition
            className="relative transform bg-white overflow-hidden rounded-lg h-screen w-full p-16  text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-full sm:max-w-2xl"
          >
            <div className="absolute top-5 left-6 cursor-pointer">
              <p
                onClick={() => setOpen(false)}
                className=" text-3xl"
              >
                X
              </p>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h1"
                    className="text-3xl font-semibold leading-6 text-gray-900"
                  >
                    Welcome to Communities
                  </DialogTitle>

                  <div className="mt-3">
                    <p className="text-lg text-gray-500">
                      Communities are moderated discussion groups where people
                      on X can connect and share.
                    </p>
                    <div className="mt-12">
                      <div className="flex">
                        <SparklesIcon
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-3">
                          <h3 className="font-bold">
                            Meet others with your interest
                          </h3>
                          <p className="text-gray-500">
                            Talk to people who care about the same things you
                            do.
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-6">
                        <SparklesIcon
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-3">
                          <h3 className="font-bold">
                            Post directly to a Community
                          </h3>
                          <p className="text-gray-500">
                            Your posts are shared with other Community members
                            __not your followers.
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-6">
                        <HeartAddIcon
                          style={{ width: "40px", height: "40px" }}
                        />
                        <div className="ml-3">
                          <h3 className="font-bold">
                            Get backup when you need it
                          </h3>
                          <p className="text-gray-500">
                            Admins and moderators help manage Commubnities and
                            keep conversations on track.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 w-full bg-black text-white cursor-pointer text-center rounded-full py-3 ">
                        Check it out
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div> */}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
