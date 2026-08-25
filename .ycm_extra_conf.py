old_bytecode = sys.dont_write_bytecodesys.dont_write_bytecode = True

path = os.path.abspath(os.path.join(os.path.dirname(__file__), "mach"))

# If mach is not here, we're on the objdir go to the srcdir.
if not os.path.exists(path):
    with open(os.path.join(os.path.dirname(__file__), "mozinfo.json")) as info:
        config = json.loads(info.read())
    path = os.path.join(config["topsrcdir"], "mach")

sys.dont_write_bytecode = old_bytecode


def _is_likely_cpp_header(filename):
    if not filename.endswith(".h"):
        return False

    if filename.endswith("Inlines.h") or filename.endswith("-inl.h"):
        return True

    cpp_file = filename[:-1] + "cpp"
    return os.path.exists(cpp_file)


def Settings(**kwargs):
    if kwargs["language"] == "cfamily":
        return FlagsForFile(kwargs["filename"])
    # This is useful for generic language server protocols, like rust-analyzer,
    # to discover the right project root instead of guessing based on where the
    # closest Cargo.toml is.
    return {
        "project_directory": ".",
    }


def FlagsForFile(filename):
    output = subprocess.check_output([path, "compileflags", 
