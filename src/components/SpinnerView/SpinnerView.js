import "./SpinnerView.css";

const SpinnerView = () => {
	return (
		<div className="flex items-center justify-center h-screen- mt-16">
			<div className="flex space-x-2">
				<div className="w-4 h-4 bg-emerald-400 rounded-full animate-custom-bounce" style={{ animationDelay: "0.1s" }}></div>
				<div className="w-4 h-4 bg-emerald-400 rounded-full animate-custom-bounce" style={{ animationDelay: "0.2s" }}></div>
				<div className="w-4 h-4 bg-emerald-400 rounded-full animate-custom-bounce" style={{ animationDelay: "0.3s" }}></div>
			</div>
		</div>
	);
};

export default SpinnerView;
