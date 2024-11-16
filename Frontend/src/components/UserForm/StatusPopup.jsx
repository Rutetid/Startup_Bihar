import React from "react";

const StatusPopup = ({title, subtitle , imgpath ,  }) => {

	return (
		<div className="absolute top-1/3 left-1/3  ml-20 w-4/12">
			<div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
				<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
							<AiOutlineCloudUpload />
                            <img src="${imgpath}" alt="" />
						</div>
						<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
							<h3
								class="text-base font-semibold text-gray-900"
								id="modal-title"
							>
								{title}
							</h3>

							<div class="mt-2">
								<p class="text-md text-gray-500">{subtitle}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
					{buttonVisible && (
						<button
							type="button"
							class="inline-flex w-full justify-center rounded-md bg-red-600 px-6 py-2 text-sm  text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto "
							onClick={() => setStatusPopup(false)}
						>
							Ok
						</button>
					)}
					<button
						type="button"
						class="mt-3  w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hidden"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default StatusPopup;
