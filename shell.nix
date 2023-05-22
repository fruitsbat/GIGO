with import <nixpkgs> { };
stdenv.mkDerivation rec {
  name = "ng";
  env = buildEnv {
    name = name;
    paths = buildInputs;
  };
  buildInputs = [ nodejs-18_x nodePackages."@angular/cli@16" ];
  shellHook = ''
    export PATH="$HOME/go/bin:$PATH"
  '';
}
