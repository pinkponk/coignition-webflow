## HOW TO USE

### setup conda env
```bash
conda create -n video-to-ascii python=3.7
conda activate video-to-ascii
```

### install https://github.com/joelibaceta/video-to-ascii
```bash
pip install video-to-ascii==1.2.8
```

### deit the resolution
edit the strategy file to the correct resolution for example 280x60 
~/miniconda3/envs/ascii/lib/python3.7/site-packages/video_to_ascii/render_strategy/aschii_strategy.py

### render the ascii art
```bash
video-to-ascii -f particle-text-ascii8.mp4  -o art.sh
```

### Run the convert_shell_to_javascript.py
```bash
python convert_shell_to_javascript.py
```

### Test by serving the index.html


### gzip the coignition.js
```bash
gzip coignition.js -c > coignition.js.gz
```
This will be served by a CDN